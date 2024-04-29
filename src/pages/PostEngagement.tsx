import RootLayout from "../components/RootLayout";
import PostsTable from "../components/page-specific/PostEngagement/PostsTable";
import Breadcrumb from "../components/ui/Breadcrumbs";




function PostEngagement() {





    return (
        <RootLayout>
            <Breadcrumb items={['Post Engagement']} />
            <PostsTable />
        </RootLayout>
    )
}

export default PostEngagement
