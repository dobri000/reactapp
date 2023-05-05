import {useForm} from 'react-hook-form';

const Contact = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (d) =>
    alert(['Uspesno ste poslali podatke', JSON.stringify(d)]);

    return (
        <div>
            <h3>Ukoliko zelite da budete obavestavani o rezultatima, molim vas popunite formu.</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("firstname")} placeholder="Ime"></input>
                    <input type="text" {...register("lastname")} placeholder="Prezime"></input>
                    <input type="date" {...register("birth")}></input>
                    <input type="email" {...register("email")} placeholder="Email"></input>
                    <input type="submit" value="Posalji podatke"></input>
                </form>
            </div>
        </div>
    );

}

export default Contact;