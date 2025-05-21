import { useTranslation } from "react-i18next";
import Metatag from "../../../components/resusable/meta-tag";
import NavigationButton from "../../../components/resusable/navigation-button";

const BlogDetail = () =>{

    const {t} = useTranslation('meta');
    const richText = `
        <p>React គឺជាបណ្ណាល័យ JavaScript ប្រើសម្រាប់បង្កើត UI។ វាអាចអភិវឌ្ឍបានលឿន និងអាច scale បាន។ Learn about modern typography, spacing, and color schemes that enhance user experience.</p>
        <p>Learn about modern typography, spacing, and color schemes that enhance user experience.</p>
        <ul><li>Use HTTPS</li><li>Rate Limiting</li><li>Authentication & Authorization</li></ul>
    `;

    return (
        <div>
            <Metatag title={t('blog.title')} description="Blog Slug"/>
            <div className="my-10">
                <NavigationButton />
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">ការអភិវឌ្ឍន៍ Web App ជាមួយ React</h1>
                    <p>ការប្រើប្រាស់ React ដើម្បីបង្កើត Web App ប្រកបដោយប្រសិទ្ធភាព</p>
                </div>
                <img className="w-full h-[35rem] object-cover rounded-lg" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" />
                <div dangerouslySetInnerHTML={{ __html: richText }} />
            </div>
        </div>
    )
}

export default BlogDetail;