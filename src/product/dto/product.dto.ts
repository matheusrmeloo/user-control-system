import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class Product {
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false })
  amount: number;

  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => Properties)
  properties: Properties[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => Image)
  images: Image[];

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  dateCreated: Date;

  @IsNotEmpty()
  dateUpdated: Date;

  @IsBoolean()
  deleted: boolean = false;
}

export class Properties {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
}

export class Image {
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
}
