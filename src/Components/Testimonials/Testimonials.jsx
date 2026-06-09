import React, { useEffect, useState } from "react";
import axios from "axios";
import badge from "../../assets/image/A.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coffeeblast2 from "../../assets/image/Coffee_blast 2.png";
import coffeeblast from "../../assets/image/Coffee_blast 1.png";



const Quotes = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getQuote = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await axios.get("/favqs/api/qotd");

                const quoteData = response.data?.quote;

                if (!quoteData?.body) {
                    throw new Error("Quote body not found");
                }

                setQuote(quoteData.body);
                setAuthor(quoteData.author || "Unknown");
            } catch (err) {
                console.error("Quotes API Error:", err);
                setError("Failed to retrieve sentence of the day.");
            } finally {
                setLoading(false);
            }
        };

        getQuote();
    }, []);



    return (
        <div
            id="Contact"
            className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-8 md:px-16 lg:px-20"
        >
            <div className="mb-10 text-center">
                <h1 className="text-xl font-semibold text-[#603809] sm:text-3xl md:text-4xl">
                    Words of Wisdom
                </h1>

                <p className="mt-4 text-sm text-[#707070] sm:text-base">
                    A collection of inspiring quotes to brighten your day and spark your thoughts.
                </p>
            </div>

            <div className="relative bg-[#FDF5EC] text-gray-700 border border-[#FFE4BF] rounded-xl shadow-lg px-6 sm:px-10 pt-10 pb-20 max-w-3xl mx-auto">
                <div className="flex justify-center">
                    <img src={badge} alt="badge" className="w-12 m-6 sm:w-16" />
                </div>
                {loading && <p className="text-slate-500">Loading quote...</p>}

                {error && !loading && <p className="text-red-500">{error}</p>}

                {!loading && !error && (
                    <blockquote>
                        <p className="text-center text-sm sm:text-base leading-relaxed line-clamp-2 mt-4">
                            “{quote}”
                        </p>
                        <div className="mt-6 text-center">
                            <h3 className="text-lg sm:text-2xl font-semibold text-[#6D3D0F]"> — {author}</h3>
                        </div>
                    </blockquote>
                )}
            </div>



            <div className="absolute right-0 top-0 hidden w-64 lg:block xl:w-80">
                <img
                    src={Coffeeblast2}
                    alt="Decoration Top Right"
                    className="h-auto w-full"
                />
            </div>

            <div className="absolute bottom-0 left-0 hidden w-64 lg:block xl:w-80">
                <img
                    src={coffeeblast}
                    alt="Decoration Bottom Left"
                    className="h-auto w-full"
                />
            </div>
        </div>
    );
};

export default Quotes;
