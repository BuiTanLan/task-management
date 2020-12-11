import { ApiProperty } from "@nestjs/swagger";
import { TaskStatus } from "../tasks.model";

export class GetTasksFilterDto{
    @ApiProperty()
    status: TaskStatus;
    @ApiProperty()
    search: string;
}