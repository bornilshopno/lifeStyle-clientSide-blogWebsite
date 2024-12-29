import Lottie from "lottie-react";
import faqAnimation from "./faq.json"


const Faqs = () => {
   
    return (<div className="w-11/12 md:w-10/12 mx-auto">

        <div className="flex flex-col md:flex-row gap-5 mt-10 ">
            <div className="md:w-1/2 my-auto">
            <div className="w-2/3 mx-auto">
            <Lottie animationData={faqAnimation} loop={true}></Lottie>
            </div>
            <h2 className="text-center text-2xl md:text-5xl font-bold py-3 border-2 rounded-lg w-2/3 bg-amber-400 text-white mx-auto mt-5">FAQs <br/> <span className="text-base">Frequently Asked Questions</span></h2>
 
            </div>
            <div className="md:w-1/2 my-auto">

                <div className="collapse collapse-plus bg-base-200 mb-1 dark:bg-gray-600">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How do I create a new blog post?</div>
                    <div className="collapse-content">
                        <p>Create a new blog post by logging in, clicking ADD BLOG , writing your content, adding media, and publishing.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1 dark:bg-gray-600">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How do I comment on other blog posts?</div>
                    <div className="collapse-content">
                        <p>Comment on other blog posts by locating the comment section, writing your comment, and submitting it.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1 dark:bg-gray-600">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How do I subscribe to other blogs or receive email notifications?</div>
                    <div className="collapse-content">
                        <p>Subscribe to blogs or receive email notifications by using the SUBSCRIBE button or link provided on the blog.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1 dark:bg-gray-600">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Is there any filtering option available?</div>
                    <div className="collapse-content">
                        <p>Yes, you gotta filter blogs from ALL BLOGS page.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1 dark:bg-gray-600">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is the platform's policy on spam and inappropriate content?</div>
                    <div className="collapse-content">
                        <p>The platform has a zero-tolerance policy for spam and inappropriate content, with violations resulting in content removal or account restrictions.

                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    );
};

export default Faqs;