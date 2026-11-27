import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    age: z.coerce.number().min(1, "Enter a valid age"),
    password: z.string().min(8, "Password must be at least 8 characters")
});

function FormComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <h1>Student Registration Form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register("name")} />
                    <p>{errors.name?.message}</p>
                </div>

                <div>
                    <label>Email:</label>
                    <input {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label>Age:</label>
                    <input type="number" {...register("age")} />
                    <p>{errors.age?.message}</p>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" {...register("password")} />
                    <p>{errors.password?.message}</p>
                </div>

                <button type="submit">Register</button>
            </form>
        </>
    );
}

export default FormComponent;