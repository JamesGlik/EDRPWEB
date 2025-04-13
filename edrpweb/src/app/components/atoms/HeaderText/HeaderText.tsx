import { Header } from '../../../types/HeaderTextProps/HeaderTextProps';

const HeaderText = ({ text }: Header) => {
  return (
    <p className='font-extrabold text-[#ffffffc4] hover:text-[#ffffff]  cursor-pointer'>{text}</p>
  );
};

export default HeaderText;