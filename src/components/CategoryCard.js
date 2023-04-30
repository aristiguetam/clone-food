
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { urlFor } from '../sanity/sanity'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity
            className="relative mr-2"
        >
            <Image
                source={{
                    uri: urlFor(imgUrl).url() 
                }}
                className="h-20 w-20 rounded"
            />
            <Text
            className="absolute bottom-1 left-1 text-white font-bold "
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard