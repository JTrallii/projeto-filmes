import imgPrincipal from "./index.module.css";

interface ImgPrincipalProps {
  srcImg: string;
  alt: string;
  id: string;
}

const ImgPrincipal: React.FC<ImgPrincipalProps> = ({ srcImg, alt, id }) => {
  return (
    <>
      <img className={imgPrincipal.img} src={srcImg} alt={alt} id={id} />
    </>
  );
};

export default ImgPrincipal;
