import "../less/footer.less";
import { useState } from "react";
import { useForm} from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormData = {
    email: string;
};

export default function FooterPage() {
    const [activeModal, setActiveModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const emailSend: SubmitHandler<FormData> = (data) => {
        console.log(data);

        setActiveModal(true);

        setTimeout(() => {
            setActiveModal(false);
            reset();
        }, 3000);
    };

    return (
        <main className="footer">
            <div className={activeModal ? "modalWindow active" : "modalWindow"}>
                <h2>Your email was sent</h2>
            </div>

            <aside>
                <div className="container">
                    <h3 className="square animate__animated animate__fadeInLeft wow">
                        Newsletter
                    </h3>

                    <form
                        onSubmit={handleSubmit(emailSend)}
                        className="square animate__animated animate__fadeInRight wow"
                    >
                        <input
                            type="email"
                            placeholder="Enter email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="error">{errors.email.message}</p>
                        )}

                        <button type="submit">Send</button>
                    </form>
                </div>
            </aside>

            <div className="container">
                <aside className="square animate__animated animate__fadeInUp wow">
                    <menu>
                        <li><a href="#">HTML Design</a></li>
                        <li><a href="#">WP Themes</a></li>
                        <li><a href="#">CMS Themes</a></li>
                        <li><a href="#">eCommerce</a></li>
                        <li><a href="#">Blogging</a></li>
                        <li><a href="#">UI Templates</a></li>
                    </menu>

                    <p>
                        2021 JS Template. Designed By Ojjomedia. All Rights Reserved.
                    </p>
                </aside>
            </div>
        </main>
    );
}
