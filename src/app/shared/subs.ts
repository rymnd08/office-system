import { Subscription } from "rxjs";

export class MySubscriptions {
    subs : Subscription[] = []

    set add(subs: Subscription){
        this.subs.push(subs)
    }

    unsubs(){
        for(const sub of this.subs){
            sub.unsubscribe()
        }
    }
}