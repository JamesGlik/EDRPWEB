import { Header } from '../../../types/HeaderTextProps/HeaderTextProps';

const HeaderText = ({ text }: Header) => {
  return (
    <p className='font-bold text-[#C4C4C4] hover:text-[#ffffff]  cursor-pointer'>{text}</p>
  );
};

export default HeaderText;