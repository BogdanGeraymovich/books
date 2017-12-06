import { ApiModelProperty } from '@nestjs/swagger';

export class GetBookDto {
    @ApiModelProperty()
    readonly id: string;
}