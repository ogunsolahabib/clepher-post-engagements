import { Link } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Breadcrumb from "../components/ui/Breadcrumbs";
import Card, { CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Comments from "../components/page-specific/EditPostEngagement/Comments";

export default function EditPostEngagement() {
    return <RootLayout>
        <div className="flex justify-between my-2">
            <Breadcrumb items={["Capture Tools", <Link to="/post-engagements">Post Engagements</Link>, 'Edit']} />
            <Button>Save</Button>
        </div>
        <Card>
            <CardBody>
                <div className="flex flex-col md:flex-row">
                    <div className="md:basis-2/5">
                        <Comments />
                    </div>
                </div>
            </CardBody>
        </Card>
    </RootLayout>
}