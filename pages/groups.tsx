import getGroups from "../src/lib/getGroups";
import GroupsPage from "../src/pages/GroupsPage";

export default function Groups({data, error, errorMessage}) {
    return (
        <GroupsPage
            data={data}
            error={error}
            errorMessage={errorMessage}
        />
    )
}

export async function getStaticProps() {
    let groups = await getGroups()

    return {
        props: {
            ...groups,
        },
        revalidate: 3600
    }
}