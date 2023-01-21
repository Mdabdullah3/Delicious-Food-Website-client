import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiTwotoneStar } from 'react-icons/ai';
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useEffect } from "react";
const AddReviews = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const [currentValue, setCurrentValue] = useState(1);
    const stars = Array(5).fill(1);
    const handleClick = (value) => {
        setCurrentValue(value);
    };

    // User All Data 
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const email = user?.email;
        const url = `https://delicious-food-djab.onrender.com/user/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [userData]);

    const onSubmit = (data) => {
        const reviewData = {
            name: user?.displayName,
            email: user?.email,
            rating: currentValue,
            description: data.review,
            address: userData.address || data.address,
            img: userData?.img || user?.photoUrl,
        };

        fetch("https://delicious-food-djab.onrender.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Thank You For Your Attention");
            });
        reset();
    };
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between w-9/12 mx-auto">
                <div className="my-4 mx-auto">
                    <h1 className="text-xl text-center text-primary pt-10">Add Your Reviews</h1>
                    <h2 className="text-center font-mono font-semibold  pb-6 text-white text-2xl">
                        Your opinion matters!
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    value={userData?.address}
                                    className="bg-transparent w-full input font-mono text-xl border-2 border-primary text-secondary"
                                    {...register("address")}
                                    required
                                />
                            </div>
                            <textarea
                                type="text"
                                name="message"
                                className="p-4 mt-4 mb-4 text-secondary bg-transparent rounded-md resize-none border-2 py-10 border-primary text-area"
                                placeholder="Message..."
                                {...register("review", {
                                    required: true,
                                })}
                            ></textarea>
                            <div className="flex justify-start py-3 items-center space-x-2">
                                <h1 className="text-base font-medium font-mono text-white">
                                    Rating:
                                </h1>
                                {stars?.map((e, i) => {
                                    return (
                                        <AiTwotoneStar
                                            className={`cursor-pointer ${currentValue > i ? "text-orange-500 text-2xl" : "text-gray-200 text-2xl"
                                                }`}
                                            onClick={() => handleClick(i + 1)}
                                        />
                                    );
                                })}
                            </div>

                        </div>
                        <button
                            type="submit"
                            value="Send"
                            className="relative mb-8 w-7/12 mx-auto inline-flex mt-3  items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border-2 border-primary rounded-xl group"
                        >
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-primary"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-center text-secondary transition-colors duration-200 ease-in-out group-hover:text-white">
                                Submit
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;
