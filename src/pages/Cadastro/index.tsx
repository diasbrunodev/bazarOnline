import { ChangeEvent, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { FiTrash, FiUpload } from 'react-icons/fi'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { v4 as uuidV4 } from 'uuid'

import { db, storage } from '../../services/firebaseConnection'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'

import { Input } from '../../components/Input'
import { AuthContext } from '../../contexts/authContext'
import { addDoc, collection } from 'firebase/firestore'
import {
  SectionRegister,
  Titulo,
  SentFile,
  Form,
  ButtonTrash,
  CardImage,
} from './styles'

const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  price: z.string().nonempty('O preço é obrigatório'),
  description: z.string().nonempty('A descrição é obrigatória.'),
})

type FormData = z.infer<typeof schema>

interface ImageItemProps {
  uid: string
  name: string
  previewUrl: string
  url: string
}

export const Cadastro = () => {
  const { user } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const [imagesItem, setImagesItem] = useState<ImageItemProps[]>([])

  const navigate = useNavigate()

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]
      // console.log('IMAGE:', image)

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        await handleUpload(image)
      } else {
        alert('Envie uma imagem jpeg ou png!')
        return
      }
    }
  }

  async function handleUpload(image: File) {
    if (!user?.uid) {
      return
    }

    const currentUid = user?.uid
    const uidImage = uuidV4()

    const uploadRef = ref(storage, `images/${currentUid}/${uidImage}`)

    uploadBytes(uploadRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        // console.log(downloadUrl)
        const imageItem = {
          name: uidImage,
          uid: currentUid,
          previewUrl: URL.createObjectURL(image),
          url: downloadUrl,
        }
        setImagesItem((images) => [...images, imageItem])
      })
    })
  }

  async function handleDeleteItem(item: ImageItemProps) {
    const imagePath = `images/${item.uid}/${item.name}`
    const imageRef = ref(storage, imagePath)

    try {
      await deleteObject(imageRef)
      setImagesItem(imagesItem.filter((img) => img.url !== item.url))
    } catch (error) {
      // console.log('ERRO AO DELETAR')
    }
  }

  function onSubmit(data: FormData) {
    if (imagesItem.length === 0) {
      alert('Envie alguma imagem deste item!')
      return
    }

    const itemsListImages = imagesItem.map((itemImage) => {
      return {
        uid: itemImage.uid,
        name: itemImage.name,
        url: itemImage.url,
      }
    })

    addDoc(collection(db, 'items'), {
      name: data.name.toUpperCase(),
      price: data.price,
      description: data.description,
      created: new Date(),
      images: itemsListImages,
      owner: user?.name,
      uid: user?.uid,
    })
      .then(() => {
        // console.log('CADASTRADO COM SUCESSO', db)
        setImagesItem([])
        reset()
        navigate('/')
      })
      .catch((error) => {
        // console.log('ERRO:', error)
        error
      })

    // console.log('DATA:', data)
  }

  return (
    <>
      <SectionRegister>
        <Titulo>Cadastro</Titulo>

        <div>
          <SentFile>
            <div className="upload">
              <FiUpload size={30} color="#000" />
            </div>
            <div className="divInput">
              <input type="file" accept="image/*" onChange={handleFile} />
            </div>
          </SentFile>

          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                register={register}
                name="name"
                error={errors.name?.message}
                placeholder="Nome"
              />
              <Input
                type="text"
                register={register}
                name="price"
                error={errors.price?.message}
                placeholder="Preço"
              />
              <Input
                type="text"
                register={register}
                name="description"
                error={errors.description?.message}
                placeholder="Descrição"
              />
              <div className="button">
                <button type="submit">Adicionar</button>
              </div>

              <div className="button-green">
                <Link to="/dashboard">
                  <div>
                    <button>Controle</button>
                  </div>
                </Link>
              </div>

              {/* <div className="button-green">
                <Link to="/">
                  <div>
                    <button>Home</button>
                  </div>
                </Link>
              </div> */}
            </Form>
          </div>
        </div>

        {imagesItem.map((item) => (
          <CardImage key={item.name}>
            <ButtonTrash>
              <button onClick={() => handleDeleteItem(item)}>
                <FiTrash size={28} />
              </button>
            </ButtonTrash>
            <img
              src={item.previewUrl}
              alt="Foto do produto"
              width={'300px'}
              height={'200px'}
            />
          </CardImage>
        ))}
      </SectionRegister>
    </>
  )
}
