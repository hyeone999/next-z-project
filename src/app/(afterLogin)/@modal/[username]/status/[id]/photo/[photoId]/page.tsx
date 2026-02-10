import Post from "@/src/app/(afterLogin)/_component/Post";
import CommentForm from "@/src/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import ActionButtons from "@/src/app/(afterLogin)/_component/ActionButtons";
import style from "@/src/app/(afterLogin)/@modal/[username]/status/[id]/photoModal.module.css"
import PhotoModalCloseButton
  from "@/src/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton";
import {faker} from "@faker-js/faker";

export default function Default() {
  const photo = {
    imageId: 1,
    link: faker.image.urlPicsumPhotos(),
    Post: {
      content: faker.lorem.text()
    }
  }
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div className={style.image} style={{backgroundImage: `url(${photo.link})`}} />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}