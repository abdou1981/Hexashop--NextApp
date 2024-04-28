import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function generateMetadata({ params}) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description:product.description
  }
}

export default async function Post({params}) {

  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>  
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image 
              key={product.id}
              src={image}
              alt={product.title}
              width={100}
              height={100}
            />
          ))}
        </div>


        {/* <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quod omnis maiores cumque eveniet voluptas sint. Earum facere totam,
          laudantium molestias obcaecati perspiciatis et officia corrupti esse
          unde aspernatur! Quos alias sit, neque modi est voluptatum accusantium
          dolorem aspernatur quod numquam! Placeat ipsam eaque aspernatur
          corrupti fuga reprehenderit quisquam? Recusandae exercitationem autem
          consectetur tempore error ab id voluptas maiores accusamus totam
          perferendis, cumque illum et repellat aut aperiam odit minima dolores.
          Quia atque esse id. Minus aut delectus autem, quis ea laboriosam
          perferendis iusto eum ratione soluta commodi dolore minima eos facere
          harum. Deserunt accusantium nam fugit laborum minima. Dignissimos
          laudantium consectetur exercitationem quaerat eius suscipit blanditiis
          tempore rem corporis? Dolores pariatur dolor optio. Praesentium
          sapiente et ea totam maiores delectus neque. Dolore, temporibus
          tempore possimus fuga perferendis quam inventore debitis asperiores
          repellat doloribus cumque eos numquam, nisi aliquid corporis alias
          totam aperiam doloremque facere ipsa obcaecati dolorem explicabo!
          Minus delectus soluta deserunt laboriosam blanditiis. Voluptatem
          voluptas asperiores corrupti dolore nobis et recusandae, itaque esse
          reiciendis, nesciunt dolor velit. Aspernatur autem repudiandae
          quibusdam non consequuntur ad culpa dicta dolor, molestias odit
          accusantium doloremque cupiditate nihil incidunt veritatis, inventore
          iure maiores tempore iste omnis deserunt vero accusamus sint? Libero
          atque quo voluptatibus saepe voluptate voluptatem magni aspernatur rem
          rerum id reiciendis aliquam quis porro nostrum sed, numquam, eveniet
          doloremque nemo magnam exercitationem voluptas alias laboriosam
          deserunt tenetur! Quae magnam dignissimos nesciunt doloremque qui cum
          nostrum, rem autem perspiciatis dolore vero quidem ducimus officiis
          voluptates inventore eius nihil exercitationem, vitae sit dolorum. Eos
          voluptatibus dolore praesentium esse voluptatum expedita nobis vero
          amet mollitia culpa, obcaecati, explicabo facere. Distinctio ad optio
          eius. Asperiores, quam pariatur nisi quasi omnis quod iste neque,
          tempora ad cum autem repudiandae dolores, quas dicta reiciendis esse?
          Beatae officiis commodi et officia id molestiae ducimus odio minima
          atque natus iure fugit ipsum doloremque autem esse, incidunt illo
          numquam porro corrupti laboriosam possimus veritatis? Magni, placeat?
          Delectus dicta nostrum magni? Hic doloremque quia quo iure. Sint,
          inventore quos beatae architecto illo veritatis illum omnis vitae
          voluptate obcaecati corrupti dolor quam suscipit, sit ipsum soluta
          vel, reiciendis possimus dolorum impedit quibusdam rem error ducimus
          consectetur! Consequatur esse, ea doloremque sint possimus nulla hic.
          Distinctio necessitatibus veniam ipsam rerum incidunt deleniti non
          tempore sit eos? Exercitationem magnam officia obcaecati sunt
          aspernatur magni amet! At, molestiae illo. Iusto voluptate repudiandae
          vel cum ducimus placeat deserunt doloribus, pariatur veniam iste
          delectus saepe unde illo sapiente eum fugit ex dolorem ea at
          architecto quam tempora ipsa officiis. Officiis consectetur ad natus
          explicabo, mollitia sequi quam quasi repudiandae eum vero ipsum fugit
          illum, molestiae nisi eveniet soluta! Veniam quos eos natus cum nam
          quia fugiat, quod eligendi quas sed nemo minus ut inventore ad ducimus
          numquam, nulla deserunt tempore repudiandae fuga fugit. Nemo
          perferendis quos ex commodi amet vitae adipisci quas quisquam
          veritatis, suscipit facere quaerat rem libero possimus enim nobis
          error assumenda odit molestiae quidem excepturi, deleniti
          perspiciatis? Qui minus cupiditate quisquam saepe odit quibusdam
          accusamus suscipit est distinctio. Mollitia quisquam laudantium quos
          debitis cupiditate!
        </p> */}
      </div>
    </div>
  );
}
