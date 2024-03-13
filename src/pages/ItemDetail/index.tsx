import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { FaWhatsapp } from 'react-icons/fa'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'

import {
  Button,
  CardDetailSection,
  Contact,
  DetailSection,
  Informations,
} from './styles'

interface ItemsProps {
  id: string
  name: string
  uid: string
  price: string | number
  description: string
  images: ItemImageProps[]
}

interface ItemImageProps {
  name: string
  uid: string
  url: string
}

export const ItemDetail = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [item, setItem] = useState<ItemsProps>()

  const [sliderPerView, setSliderPerView] = useState(2)

  const numeroWhatsApp = '5521983248503'
  const mensagem = `Olá, gostaria de comprar esse produto: ${item?.name} Código: ${item?.id}`
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`

  useEffect(() => {
    loadItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function loadItem() {
    if (!id) {
      return
    }

    const docRef = doc(db, 'items', id)
    getDoc(docRef).then((snapshot) => {
      if (!snapshot.data()) {
        navigate('/')
      }

      setItem({
        id: snapshot.id,
        name: snapshot.data()?.name,
        uid: snapshot.data()?.uid,
        price: snapshot.data()?.price,
        description: snapshot.data()?.description,
        images: snapshot.data()?.images,
      })
    })
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSliderPerView(1)
      } else {
        setSliderPerView(2)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <DetailSection>
        <CardDetailSection>
          {item && (
            <Swiper
              className="slide"
              slidesPerView={sliderPerView}
              pagination={{ clickable: true }}
              navigation
            >
              {item?.images.map((image) => (
                <SwiperSlide key={image.name}>
                  <img src={image.url} alt="Foto do item" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {item && (
            <Informations key={item.id}>
              <h2 className="titulo">{item.name}</h2>
              <p>R$: {item.price}</p>
              <p>{item.description}</p>

              {/* <Link to="/carrinho">
            <button>Adicionar</button>
          </Link> */}

              <Contact href={urlWhatsApp} target="_blank">
                <FaWhatsapp size={26} color="#fff" />
                Faça seu pedido!
              </Contact>
            </Informations>
          )}
        </CardDetailSection>
      </DetailSection>

      <Button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </Button>
    </>
  )
}
