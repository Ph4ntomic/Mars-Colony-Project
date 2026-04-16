import { useParams } from 'react-router-dom';

const City = () => {
    const { name } = useParams();

    return (
        <section>
            <h3 className="text-2xl font-semibold text-mars-accent mb-4">{name}</h3>
        </section>
    );
}

export default City;