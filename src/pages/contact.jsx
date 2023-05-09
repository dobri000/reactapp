import {useForm} from 'react-hook-form';

const Contact = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => {
        alert(['Uspesno ste poslali podatke', JSON.stringify(d)]);
        console.log(d.firstname);
    }

    return (
        <div>
            <h3>Ukoliko zelite da budete obavestavani o rezultatima, molim vas popunite formu.</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("firstname", {required: true})} placeholder="Ime"></input>
                    <input type="text" {...register("lastname", {required: true})} placeholder="Prezime"></input>
                    <input type="date" {...register("birth", {required: true})}></input>
                    <input type="email" {...register("email", {required: true})} placeholder="Email"></input>
                    <input type="submit" value="Posalji podatke" id='contactSubmit'></input>
                </form>
            </div>
        </div>
    );

}

export default Contact;