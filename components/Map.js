import React from 'react'
import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
  wrapper: `flex-1 h-full w-full`
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }
  }, [])
  

  return (
    <div className={style.wrapper} >Map</div>
  )
}
