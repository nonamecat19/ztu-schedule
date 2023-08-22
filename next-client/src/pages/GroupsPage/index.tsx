import {BaseApi} from "../../shared/types/api";
import {GroupType} from "../../shared/types/groups";
import {useState} from "react";
// import {Chip} from "@nextui-org/react";

export default function GroupsPage({data, error, errorMessage}: BaseApi<GroupType[]>) {

    const [faculty, setFaculty] = useState<number | null>(null)
    const [course, setCourse] = useState<number | null>(null)
    const [group, setGroup] = useState<number | null>(null)


    if (error) {
        return (
            <h1>{errorMessage}</h1>
        )
    }

    return (
        <>
            <div className="flex gap-4">
                {faculty !== null && <h1>Факультет: {data[faculty].name}</h1>}
                {/*<Chip color="secondary">Secondary</Chip>*/}
            </div>

            <div>
                {
                    faculty === null &&
                    data.map((el, index) => {
                        return (
                            <h1
                                key={index}
                                onClick={() => setFaculty(index)}
                            >
                                {el.name}
                            </h1>
                        )
                    })
                }
                {
                    faculty !== null && course === null &&
                    data[faculty].courses.map((el, index) => {
                        return (
                            <h1
                                key={index}
                                onClick={() => setCourse(index)}
                            >
                                {el.name}
                            </h1>
                        )
                    })
                }
            </div>
        </>
    )
}

