import Head from 'next/head';
import Header from '../components/Header';
import Card from '../components/Card';

const Index: React.FC = () => {
  const cards = [
    {
      title: 'Location',
      description: '665 Dundas St E, Belleville, ON K8N 5V9',
      imageURL: '/WH4.jpg',
    },
    {
      title: 'Experience',
      description: "Over the years, we've built a strong reputation for delivering outstanding logistics solutions. Our team's extensive experience ensures that every client receives top-notch service, tailored to their unique needs.",
      imageURL: '/WH2.jpg',
    },
    {
      title: 'Services',
      description: "Offering a comprehensive range of logistics services, we cater to businesses of all sizes. From warehousing and distribution to transportation and inventory management, our solutions are designed to streamline your supply chain and drive efficiency.",
      imageURL: '/WH3.jpg',
    },
  ];

  return (
    
    <div className="bg-eggshell-white min-h-screen">
  <Header />

  <Head>
    <title>Canada Distribution Centres</title>
  </Head>

  <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-center font-extrabold tracking-tighter leading-tight mt-20 mb-20 text-grey-blue border-2 border-white rounded-xl shadow-md bg-gray-200 px-4 py-2">
        Canada Distribution Centres
      </h1>




    <section className="flex flex-wrap items-center mb-16">
      <div className="w-full sm:w-1/2">
      
      <img
        className="object-cover w-full h-64 sm:h-auto sm:w-11/12 mx-auto rounded-xl shadow-md shadow-black border-2 border-grey-blue"
        src="/warehouse.jpg"
        alt="Warehouse"
      />

      </div>
      <div className="w-full sm:w-1/2 px-4 sm:px-8">
        <h2 className="text-xl lg:text-5xl md:text-3xl mt-10 lg:mt-0 md:mt-0 font-bold mb-4">Reliable Warehouse & Logistics Services</h2>
        <p className='text-md lg:text-2xl md:text-lg'>
          Canada Distribution Centres offers comprehensive warehouse and logistics services designed to
          meet the unique needs of businesses of all sizes. Our state-of-the-art facilities and
          experienced team of professionals ensure that your products are stored safely and
          efficiently, and your orders are processed and shipped on time. Our end-to-end supply chain
          solutions help streamline your operations, reduce costs, and improve customer satisfaction.
          Partner with us to take your business to new heights.
        </p>
      </div>
    </section>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageURL={card.imageURL}
        />
      ))}
    </div>
  </main>
</div>

  );
};

export default Index;
