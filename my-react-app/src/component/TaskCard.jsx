import {Card,CardContent} from "@/components/ui/card"

function TaskCard({ name, message, age }) {
    return(
        <Card>
            <CardContent>
               <p>Task Name: {name}</p>
               <p>Message: {message}</p>
               <p>Age: {age}</p>
            </CardContent>
        </Card>
    )
}
export default TaskCard