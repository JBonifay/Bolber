import {SimulationEventType} from "./simulation-event-type";

export interface CustomerEvent {
  uuid: string
  simulationEventType: SimulationEventType
}
