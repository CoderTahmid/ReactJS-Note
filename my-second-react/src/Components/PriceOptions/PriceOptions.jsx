import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            id: 1,
            name: "Basic Plan",
            features: ["Access to gym equipment", "Locker facility", "Free WiFi"],
            price: 20
        },
        {
            id: 2,
            name: "Premium Plan",
            features: [
                "All Basic Plan features",
                "Group fitness classes",
                "Personal trainer (2 sessions/month)"
            ],
            price: 50
        },
        {
            id: 3,
            name: "Platinum Plan",
            features: [
                "All Premium Plan features",
                "Unlimited personal training",
                "Spa & sauna access"
            ],
            price: 100
        }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;