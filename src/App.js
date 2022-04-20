const App = () =>  {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      subtitle: 'Shop Now'
    },
    {
      id: 2,
      title: 'Jackets',
      subtitle: 'Shop Now'
    },
    {
      id: 3,
      title: 'Sneakers',
      subtitle: 'Shop Now'
    },
    {
      id: 4,
      title: 'Womens',
      subtitle: 'Shop Now'
    },
    {
      id: 5,
      title: 'Mens',
      subtitle: 'Shop Now'
    }
  ]

  return (
   <div className="categories-container">
     {categories.map((category) => (
      <div key={category.id} className="category-container">
        {/* <img /> */}
        <div className='background-image' />
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>{category.subtitle}</p>
        </div>
      </div>
     ))}
   </div>
  );
}

export default App;
