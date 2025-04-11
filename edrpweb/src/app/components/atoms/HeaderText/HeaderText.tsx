import { Header } from '../../../types/HeaderTextProps/HeaderTextProps';

const HeaderText = ({ text }: Header) => {
  return (
    <p className='font-extrabold text-[#FFFFFF99]  cursor-pointer'>{text}</p>
  );
};

export default HeaderText;