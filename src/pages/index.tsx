import { Box } from '@mui/material'
import Head from 'next/head'
import cosmos from '../images/tengyart-lmrslsreZ2E-unsplash.jpg'
import cosmonavt from '../images/cosmonavt.png'
import ship from '../images/body.svg'
import { keyframes } from '@emotion/react'
import { MainMonitor } from '@/components/MainMonitor'
import { PrivatMonitor } from '@/components/PrivatMonitor'

const rotateCosmos = keyframes`
  from { 
    transform: rotate(0deg) 
  } 
  to { 
    transform: rotate(360deg)
  }
`

const monitor1 = keyframes`
  0% {
    transform: rotate(10deg)
  }
  50% {
    transform: rotate(5deg) scale(1.1, 1.1)
  }
  100% {
    transform: rotate(0deg) scale(1.2, 1.2)
  }
`

const cosmonavtAnim = keyframes`
  0% {
    transform: translateX(0px) translateY(0px) scale(1, 1) rotate(5deg)
  }
  30% {
    transform: translateX(10px) translateY(10px) scale(0.9, 0.9) rotate(10deg)
  }
  60% {
    transform: translateX(5px) translateY(5px) scale(0.95, 0.95) rotate(7deg)
  }
  100% {
    transform: translateX(0px) translate(0px) scale(1, 1) rotate(5deg)
  }
`

const style = {
  cosmos: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '150vw',
    position: 'fixed',
    height: '150vw',
    backgroundImage: `url(${cosmos.src})`,
    animation: `${rotateCosmos} 1000s linear infinite`,
    top: '-25vw',
    left: '-25vw',
    zIndex: -1
  },
  itemsWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ship: {
    backgroundImage: `url(${ship.src})`,
    height: '991px',
    width: '720px',
    position: 'relative',
  },
  monitor1: {
    display: 'flex',
    alignItems: 'center',
    flexDirections: 'column',
    justifyContent: 'center',
    width: '180px',
    height: '90px',
    backgroundColor: '#000',
    position: 'relative',
    top: '160px',
    left: '430px',
    border: '5px solid silver',
    borderRadius: '10px',
    animationFillMode: 'forward',
    transform: 'rotate(10deg)',
    '&:hover': {
      animation: `${monitor1} 0.2s linear forwards`,
    }
  },
  monitor2: {
    display: 'flex',
    alignItems: 'center',
    flexDirections: 'column',
    justifyContent: 'center',
    width: '90px',
    height: '50px',
    backgroundColor: '#000',
    position: 'relative',
    top: '477px',
    left: '85px',
    border: '3px solid silver',
    borderRadius: '5px',
    animationFillMode: 'forward',
  },
  cosmonavt: {
    backgroundImage: `url(${cosmonavt.src})`,
    backgroundSize: 'contain',
    width: '120px',
    height: '136px',
    position: 'absolute',
    top: '145px',
    left: '200px',
    zIndex: -1,
    animation: `${cosmonavtAnim} 30s linear infinite`,
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>AdonaiJehosua</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={style.cosmos}></Box>
        <Box sx={style.itemsWrapper}>
          <Box sx={style.ship}>
            
            <Box sx={style.cosmonavt}/>
            <Box sx={style.monitor1}>
              <MainMonitor/>
            </Box>
            <Box sx={style.monitor2}>
              <PrivatMonitor/>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  )
}
