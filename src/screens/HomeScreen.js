import { useEffect } from "react";
import {  SafeAreaView, ScrollView} from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context";


import { Categories } from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { HeaderComponent } from "../components/HeaderComponent";
import { SearchComponent } from "../components/SearchComponent";
import { useFetchFeatured } from "../hooks/useFetchFeatured";


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
   
    const { featuredCategories, fetchFeatured } = useFetchFeatured()
   
    useEffect(() => {
        fetchFeatured()
    }, [])

    return (
        <SafeAreaView style={{ top: top + 5 }} className="bg-white mb-20">

            <HeaderComponent text="Deliver Now!" location=" Current Location" />

            <SearchComponent />

            {/* Body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <Categories />

                {
                    featuredCategories?.map(feature => (
                        <FeaturedRow
                            key={feature._id}
                            id={feature._id}
                            title={feature.name}
                            description={feature.short_description}

                        />
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    )
}
