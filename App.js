import React from "react";
import ReactDOM from "react-dom/client";

// header -- logo and nav items
// body -- search bar, restaurantContainer, restaurantCard
// footer -- links, copyright

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logo.com/image-cdn/images/kts928pd/production/11e5681ac3b77c52480a1748abb1950ba40e4884-357x358.png?w=1080&q=72"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log("props", props);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card">
      <img
        className="card-img"
        alt="sona chinese"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resObject = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "238033",
      name: "Chinese chef co",
      cloudinaryImageId: "vgg06be2a0varwpmij7w",
      locality: "NIBM road ",
      areaName: "Bibwewadi",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Fast Food", "Asian"],
      avgRating: 3.7,
      parentId: "61635",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10793232~p=1~eid=0000018d-4c3e-f5e3-618b-254a0086017b~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 06:00:00",
        opened: true,
      },
      badges: {},
      select: true,
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=238086&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "716811",
      name: "The Hot Bowl",
      cloudinaryImageId: "5dc6765422088a62a1370773ad7a3452",
      locality: "Sai Colony",
      areaName: "Magarpatta",
      costForTwo: "₹650 for two",
      cuisines: ["Chinese", "Thai", "Malaysian"],
      avgRating: 3.6,
      parentId: "209656",
      avgRatingString: "3.6",
      totalRatingsString: "50+",
      promoted: true,
      adTrackingId:
        "cid=10821963~p=5~eid=0000018d-4c3e-f5e3-618b-254e0086053b~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=716804&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "220113",
      name: "Blue dragon chinese katta",
      cloudinaryImageId: "mghsabzobwhg3sbck4bp",
      locality: "Chondhe Patil Road",
      areaName: "Aundh",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      parentId: "48025",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=10703660~p=3~eid=0000018d-4c3e-f5e3-618b-254c0086035d~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=220133&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "220134",
      name: "Blue dragon chinese katta",
      cloudinaryImageId: "mghsabzobwhg3sbck4bp",
      locality: "Chondhe Patil Road",
      areaName: "Aundh",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      parentId: "48025",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=10703660~p=3~eid=0000018d-4c3e-f5e3-618b-254c0086035d~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=220133&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "712804",
      name: "The Hot Bowl",
      cloudinaryImageId: "5dc6765422088a62a1370773ad7a3452",
      locality: "Sai Colony",
      areaName: "Magarpatta",
      costForTwo: "₹650 for two",
      cuisines: ["Chinese", "Thai", "Malaysian"],
      avgRating: 3.6,
      parentId: "209656",
      avgRatingString: "3.6",
      totalRatingsString: "50+",
      promoted: true,
      adTrackingId:
        "cid=10821963~p=5~eid=0000018d-4c3e-f5e3-618b-254e0086053b~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=716804&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "69148",
      name: "Masala Kitchen",
      cloudinaryImageId: "ilcrkixizev1qehwtzgu",
      locality: "Kharadkar Park",
      areaName: "Kharadi",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Ice Cream", "Beverages", "Snacks"],
      avgRating: 3.6,
      parentId: "3434",
      avgRatingString: "3.6",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=10817705~p=4~eid=0000018d-4c3e-f5e3-618b-254d00860419~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=89148&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "716404",
      name: "The Hot Bowl",
      cloudinaryImageId: "5dc6765422088a62a1370773ad7a3452",
      locality: "Sai Colony",
      areaName: "Magarpatta",
      costForTwo: "₹650 for two",
      cuisines: ["Chinese", "Thai", "Malaysian"],
      avgRating: 3.6,
      parentId: "209656",
      avgRatingString: "3.6",
      totalRatingsString: "50+",
      promoted: true,
      adTrackingId:
        "cid=10821963~p=5~eid=0000018d-4c3e-f5e3-618b-254e0086053b~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=716804&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "237786",
      name: "Chinese chef co",
      cloudinaryImageId: "vgg06be2a0varwpmij7w",
      locality: "NIBM road ",
      areaName: "Bibwewadi",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Fast Food", "Asian"],
      avgRating: 3.7,
      parentId: "61635",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10793232~p=1~eid=0000018d-4c3e-f5e3-618b-254a0086017b~srvts=1706381211107~83647",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 06:00:00",
        opened: true,
      },
      badges: {},
      select: true,
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=238086&source=collection&query=Chinese",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search</div>
      <div className="res-container">
        {resObject.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
