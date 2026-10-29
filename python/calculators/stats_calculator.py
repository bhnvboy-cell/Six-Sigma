# Lean Six Sigma Statistical Calculators
import math
import statistics
import numpy as np
from scipy import stats

class BasicStats:
    """Basic descriptive statistics calculator"""
    
    @staticmethod
    def mean(data):
        """Calculate arithmetic mean"""
        if not data:
            return 0
        return sum(data) / len(data)
    
    @staticmethod
    def median(data):
        """Calculate median"""
        if not data:
            return 0
        sorted_data = sorted(data)
        n = len(sorted_data)
        if n % 2 == 1:
            return sorted_data[n // 2]
        else:
            return (sorted_data[n // 2 - 1] + sorted_data[n // 2]) / 2
    
    @staticmethod
    def mode(data):
        """Calculate mode"""
        if not data:
            return None
        try:
            return statistics.mode(data)
        except:
            return None
    
    @staticmethod
    def std_dev(data, population=False):
        """Calculate standard deviation"""
        if not data:
            return 0
        if len(data) == 1:
            return 0
        if population:
            return statistics.pstdev(data)
        return statistics.stdev(data)
    
    @staticmethod
    def variance(data, population=False):
        """Calculate variance"""
        if not data:
            return 0
        if len(data) == 1:
            return 0
        if population:
            return statistics.pvariance(data)
        return statistics.variance(data)
    
    @staticmethod
    def range_calc(data):
        """Calculate range"""
        if not data:
            return 0
        return max(data) - min(data)

class CapabilityAnalysis:
    """Process capability calculations"""
    
    @staticmethod
    def cp(usl, lsl, sigma_within):
        """Calculate Cp (potential capability)"""
        if sigma_within == 0:
            return float('inf')
        return (usl - lsl) / (6 * sigma_within)
    
    @staticmethod
    def cpk(usl, lsl, mean, sigma_within):
        """Calculate Cpk (actual capability)"""
        if sigma_within == 0:
            return float('inf')
        cpu = (usl - mean) / (3 * sigma_within)
        cpl = (mean - lsl) / (3 * sigma_within)
        return min(cpu, cpl)
    
    @staticmethod
    def pp(usl, lsl, sigma_overall):
        """Calculate Pp (process performance)"""
        if sigma_overall == 0:
            return float('inf')
        return (usl - lsl) / (6 * sigma_overall)
    
    @staticmethod
    def ppk(usl, lsl, mean, sigma_overall):
        """Calculate Ppk (process performance index)"""
        if sigma_overall == 0:
            return float('inf')
        ppu = (usl - mean) / (3 * sigma_overall)
        ppl = (mean - lsl) / (3 * sigma_overall)
        return min(ppu, ppl)
    
    @staticmethod
    def dpmo(defects, opportunities, units):
        """Calculate Defects Per Million Opportunities"""
        if opportunities == 0 or units == 0:
            return 0
        total_opportunities = opportunities * units
        if total_opportunities == 0:
            return 0
        return (defects / total_opportunities) * 1000000
    
    @staticmethod
    def sigma_level_from_dpmo(dpmo):
        """Convert DPMO to sigma level using the 1.5 sigma long-term shift."""
        if dpmo <= 0:
            return 6.0
        if dpmo >= 1000000:
            return 0.0
        yield_fraction = 1 - (dpmo / 1000000)
        return max(0.0, float(stats.norm.ppf(yield_fraction)) + 1.5)

class ControlCharts:
    """Control chart calculations"""
    
    @staticmethod
    def xbar_r_constants(n):
        """Get control chart constants for X-bar R charts"""
        constants = {
            2: {'A2': 1.880, 'D3': 0, 'D4': 3.267, 'd2': 1.128},
            3: {'A2': 1.023, 'D3': 0, 'D4': 2.574, 'd2': 1.693},
            4: {'A2': 0.729, 'D3': 0, 'D4': 2.282, 'd2': 2.059},
            5: {'A2': 0.577, 'D3': 0, 'D4': 2.114, 'd2': 2.326},
            6: {'A2': 0.483, 'D3': 0, 'D4': 2.004, 'd2': 2.534},
        }
        return constants.get(n, constants[5])
    
    @staticmethod
    def imr_constants():
        """Constants for I-MR charts"""
        return {'E2': 2.660, 'D4': 3.267, 'D3': 0}
    
    def calculate_xbar_r(self, subgroups):
        """Calculate X-bar and R chart limits"""
        # Calculate means and ranges for each subgroup
        xbar_values = []
        r_values = []
        n = len(subgroups[0]) if subgroups else 0
        
        for sg in subgroups:
            xbar_values.append(sum(sg) / len(sg))
            r_values.append(max(sg) - min(sg))
        
        xbar_bar = sum(xbar_values) / len(xbar_values)
        r_bar = sum(r_values) / len(r_values)
        
        const = self.xbar_r_constants(n)
        A2 = const['A2']
        D3 = const['D3']
        D4 = const['D4']
        
        # X-bar chart limits
        xbar_ucl = xbar_bar + A2 * r_bar
        xbar_lcl = xbar_bar - A2 * r_bar
        xbar_cl = xbar_bar
        
        # R chart limits
        r_ucl = D4 * r_bar
        r_lcl = D3 * r_bar
        r_cl = r_bar
        
        return {
            'xbar': {'ucl': xbar_ucl, 'cl': xbar_cl, 'lcl': xbar_lcl, 'values': xbar_values},
            'r': {'ucl': r_ucl, 'cl': r_cl, 'lcl': r_lcl, 'values': r_values}
        }

def main():
    """Demo usage"""
    # Basic stats
    data = [23, 25, 22, 24, 26, 23, 25]
    print("=== Basic Statistics ===")
    print(f"Data: {data}")
    print(f"Mean: {BasicStats.mean(data):.3f}")
    print(f"Median: {BasicStats.median(data):.3f}")
    print(f"Std Dev: {BasicStats.std_dev(data):.3f}")
    print(f"Range: {BasicStats.range_calc(data):.3f}")
    
    # Capability
    print("\n=== Process Capability ===")
    usl, lsl, mean, sigma = 30, 20, 24.5, 1.2
    print(f"USL={usl}, LSL={lsl}, Mean={mean}, Sigma={sigma}")
    print(f"Cp: {CapabilityAnalysis.cp(usl, lsl, sigma):.3f}")
    print(f"Cpk: {CapabilityAnalysis.cpk(usl, lsl, mean, sigma):.3f}")
    
    # DPMO
    print("\n=== DPMO ===")
    dpmo = CapabilityAnalysis.dpmo(defects=5, opportunities=3, units=1000)
    print(f"DPMO: {dpmo:.1f}")
    print(f"Sigma Level: {CapabilityAnalysis.sigma_level_from_dpmo(dpmo):.1f}")

if __name__ == "__main__":
    main()
