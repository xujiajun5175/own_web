
pub struct Calculator {
    result: f64,
}

impl Calculator {
    pub fn new() -> Self {
        Calculator { result: 0.0 }
    }
    
    pub fn add(&mut self, x: f64) -> &mut Self {
        self.result += x;
        self
    }
    
    pub fn get_result(&self) -> f64 {
        self.result
    }
}
