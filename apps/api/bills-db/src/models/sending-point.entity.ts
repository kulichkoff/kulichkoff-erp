import { TransportingPoint } from './transporting-point.entity';
import {
    Entity,
    ManyToOne,
} from 'typeorm';
import { Service } from './service.entity';

@Entity('sending_point')
export class SendingPoint extends TransportingPoint {
    @ManyToOne(() => Service, (service) => service.sending)
    service: Service;
}
