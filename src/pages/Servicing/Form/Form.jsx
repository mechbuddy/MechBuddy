import React, { useState } from "react";

const manufacturers = {
    "Varuti": ["Vitara", "Ciaz"],
    "Maruti": ["Swift", "Ciaz"],
    "Haruti": ["Dzire", "Ignis"]
};

const fuelTypes = ["Petrol", "CNG", "Diesel"];

function Form({ changeFilterData , filterModal, setFilterModal }) {

    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedFuel, setSelectedFuel] = useState("");

    const handleManufacturerChange = (event) => {
        setSelectedManufacturer(event.target.value);
        setSelectedBrand("");
        setSelectedFuel("");
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        setSelectedFuel("");
    };

    const handleFuelChange = (event) => {
        setSelectedFuel(event.target.value);
    };

    function handleClick() {
        setFilterModal(!filterModal);
        changeFilterData({
            manufacturers: selectedManufacturer,
            brand: selectedBrand,
            fuel: selectedFuel
        })
    }

    return (
        <div className={`${filterModal ? 'fixed' : 'hidden'} top-0 h-screen w-screen z-20`}>
            <div className=" absolute top-0 h-screen w-screen  bg-black opacity-75"></div>
            <div className=" absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white flex flex-col rounded-lg">
                <img src="https://i.pinimg.com/originals/b9/cb/7f/b9cb7fb9d718cc3e74e1ef05ccfd709a.gif" alt="car" className="w-[400px] rounded-t-lg" />
                <div>
                    <select
                        id="manufacturer"
                        value={selectedManufacturer}
                        className="my-1 rounded-md w-[100%] py-3 px-1"
                        onChange={handleManufacturerChange}
                    >
                        <option value="">Select Your Car Manufacturer</option>
                        {Object.keys(manufacturers).map((manufacturer) => (
                            <option key={manufacturer} value={manufacturer}>
                                {manufacturer}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedManufacturer && (
                    <div>
                        <select id="brand"
                            value={selectedBrand}
                            className="my-1 rounded-md w-[100%] py-3 px-1"
                            onChange={handleBrandChange}>
                            <option value="">Select Brand</option>
                            {manufacturers[selectedManufacturer].map((brand) => (
                                <option key={brand} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedBrand && (
                    <div>
                        <select id="fuel"
                            value={selectedFuel}
                            className="my-1 rounded-md w-[100%] py-3 px-1"
                            onChange={handleFuelChange}>
                            <option value="">Select Fuel Type</option>
                            {fuelTypes.map((fuel) => (
                                <option key={fuel} value={fuel}>
                                    {fuel}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {
                    selectedFuel && (
                        <button className="my-2 mx-auto py-3 rounded-lg border border-Primary-red bg-Primary-red text-white w-[80%] hover:bg-white hover:text-Primary-red duration-300" onClick={handleClick}>
                            Search
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Form;

