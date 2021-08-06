import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { AuthCredentialsDto } from './auth-credentials.dto';

export class AuthSignUpDto extends AuthCredentialsDto {
  @ApiProperty({ description: 'Name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Celular' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'CPF' })
  @IsString()
  cpf: string;

  @ApiProperty({ description: 'CEP' })
  @IsString()
  cep: string;

  @ApiProperty({ description: 'Data de Nascimento' })
  @IsString()
  birthday: Date;

  @ApiProperty({ description: 'Gênero' })
  @IsString()
  gender: string;
}
