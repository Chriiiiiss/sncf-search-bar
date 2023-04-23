interface SearchModalProps {
  setOpenModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<SearchModalProps> = ({ setOpenModalState }) => {
  const handleBackgroundClick = (event: React.MouseEvent) => {
    setOpenModalState(false);
    event.stopPropagation();
  };

  return (
    <>
      <div
        onClick={handleBackgroundClick}
        className="modalWrapper fixed bg-slate-300 w-screen h-screen inset-0 bg-opacity-50 min-h-full backdrop-blur-sm z-10"
      ></div>
      <div className=""></div>
    </>
  );
};

export default SearchModal;
