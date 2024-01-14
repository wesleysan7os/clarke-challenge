import { Feed } from '../components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Clarke Energia&nbsp; 
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
              Impacto Socioambiental
            </span>
            <p className="desc text-center">
              Economize até 40% na conta de luz da sua empresa sem precisar investir
            </p>
        </h1>

        <Feed />
    </section>
  )
}

export default Home;
