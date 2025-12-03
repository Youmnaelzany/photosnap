import React from "react"
import SectionContainers from "./SectionContainers"

const HomeStories = () => {
    return (
        <React.Fragment>
            <SectionContainers image="/home/mobile/create-and-share.jpg" alt="Create and share your photo Stories." title="Create and share your photo Stories." description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others." imageDesktop="/home/desktop/create-and-share.jpg" imageTablet="/home/tablet/create-and-share.jpg" bgColor="black" className="md:flex-row-reverse" textColor="white" />
            <SectionContainers image="/home/mobile/beautiful-stories.jpg" alt="Beautiful stories every time." title="Beautiful stories every time." description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone." imageDesktop="/home/desktop/beautiful-stories.jpg" imageTablet="/home/tablet/beautiful-stories.jpg" bgColor="white" className="md:flex-row" textColor="black" />
            <SectionContainers image="/home/mobile/designed-for-everyone.jpg" alt="Designed for everyone." title="Designed for everyone." description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it." imageDesktop="/home/desktop/designed-for-everyone.jpg" imageTablet="/home/tablet/designed-for-everyone.jpg" bgColor="black" className="md:flex-row-reverse" textColor="white" />
        </React.Fragment>
    )
}
export default HomeStories