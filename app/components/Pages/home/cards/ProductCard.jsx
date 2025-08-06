

const ProductCard = ({ title, image }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-2">
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        <div className="absolute bottom-0 left-0 w-full bg-blue-900 bg-opacity-70 text-white text-center py-2">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;