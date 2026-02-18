import { icon } from "@fortawesome/fontawesome-svg-core";
import { faHeadset, faShieldAlt, faTruck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromoBanner() {
    const features = [{
        icon: faTruck,
        title: "Free Shipping",
        description: "On orders over 500 EGP",
        bgColor: "bg-blue-50",
        color: "text-blue-500", 
    },
    {
        icon: faShieldAlt,
        title: "Safe Payment",
        description: "100% secure payment",
        bgColor: "bg-emerald-50",
        color: "text-emerald-500", 
    },
    {
        icon: faUndo,
        title: "Easy Returns",
        description: "14 days money back guarantee",
        bgColor: "bg-orange-50",
        color: "text-orange-500", 
    },
    {
        icon:faHeadset,
        title:"24/7 Support",
        description:"Dedicated support team",
        bgColor:"bg-purple-50",
        color:"text-purple-500"
    }
    ]
  return (
    <>
      <section className=" py-8 bg-gray-50">
        <div className="container mx-auto w-3/3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer "
              >
                <div
                  className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-50`}
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm hover:text-gray-500">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
