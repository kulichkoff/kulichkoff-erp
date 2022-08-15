import { TransportingPoint } from './transporting-point.entity';
import {
    Entity,
    ManyToOne,
} from 'typeorm';
import { Service } from './service.entity';

@Entity('unloading_point')
export class UnloadingPoint extends TransportingPoint {
    @ManyToOne(() => Service, (service) => service.sending)
    service: Service;
}
