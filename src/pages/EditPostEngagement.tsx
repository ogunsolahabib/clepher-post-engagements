import RootLayout from "../components/RootLayout";
import Settings from "../components/page-specific/EditPostEngagement/Settings";
import Breadcrumb from "../components/ui/Breadcrumbs";
import Card, { CardBody } from "../components/ui/Card";

export default function EditPostEngagement() {
    return <RootLayout>
        <Breadcrumb items={['Post Engagement']} />

        <Card className="">
            <CardBody>
                <div className="flex flex-col md:flex-row">
                    <div className="md:basis-2/5">
                        <Settings />
                    </div>
                </div>
            </CardBody>
        </Card>
    </RootLayout>
}