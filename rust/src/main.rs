use std::sync::{Arc, Mutex};
use std::thread;

struct Counter {
    count: Mutex<i32>,
}

impl Counter {
    fn new() -> Self {
        Self {
            count: Mutex::new(0),
        }
    }

    fn increment(&self) {
        let mut count = self.count.lock().unwrap();
        *count += 1;
    }

    fn get_count(&self) -> i32 {
        *self.count.lock().unwrap()
    }
}

fn main() {
    let counter = Arc::new(Counter::new());

    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..100 {
                counter.increment()
            }
        });
        handles.push(handle);
    }


    for h in handles {
      h.join().unwrap();
    }


    println!("最终技术:{}",counter.get_count())

}
