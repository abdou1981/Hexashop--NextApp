import Styles from "./Footer.module.css";
import Image from 'next/image';
import {social_media } from "./data";

export default function Footer() {
  return (
    <div className={Styles.container}>
      <div>©2024 Hexashop. All rights reserved.</div>
      <div className={Styles.social}>
        {
          social_media.map(media =>
            <Image
              key={media.id}
              src={`/images/icons/${media.name}.png`}
              width={20}
              height={20}
              className={Styles.icon}
              alt={`Hexashop ${media.name} link`}
          />  
          )
        }
      </div>
    </div>
  )
}
