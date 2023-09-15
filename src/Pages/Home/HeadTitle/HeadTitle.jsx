import image from "../../../assets/home/chef-service.jpg";
import CoverPages from "../../Shared/CoverPages/CoverPages";

const HeadTitle = () => {
  return (
    <div>
      <CoverPages
        img={image}
        title={"TastyDash"}
        details={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, neque at sapiente eum error sint vel iste, qui id aperiam quibusdam sunt est maiores mollitia. Ipsa ipsam reprehenderit officia. Repudiandae eaque rerum, aliquam vero esse itaque commodi illum similique corrupti hic laboriosam, doloremque eos, ipsam earum quia."
        }></CoverPages>
    </div>
  );
};

export default HeadTitle;
