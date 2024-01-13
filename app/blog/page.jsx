
import Hipnoza from "@/components/hipnoza";
import { TransHipVsTransSam } from "@/components/trans-hip-vs-trans-sam";
import { VindecareSpiritualaTehniciStravechi } from "@/components/vindecare-spirituala-tehnici-stravchi";

export default function Blog() {
    return (
        <div>
            <Hipnoza />
            <VindecareSpiritualaTehniciStravechi />

            <div className="px-4">
                <TransHipVsTransSam />
            </div>
            
        </div>
    )
}