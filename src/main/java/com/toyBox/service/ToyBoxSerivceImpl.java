package com.toyBox.service;

import com.toyBox.mapper.DustMapper;
import com.toyBox.mapper.HumidityMapper;
import com.toyBox.mapper.TemperatureMapper;
import jdk.internal.dynalink.beans.StaticClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by 201210098 on 2015-04-09.
 */

@Component
public class ToyBoxSerivceImpl implements ToyBoxSerivce {

    static int elevatorR = 1;
    static Boolean elevatorR_frag = true;
    static int elevatorL = 5;
    static Boolean elevatorL_frag = false;


    @Autowired
    public TemperatureMapper temperatureMapper;

    @Autowired
    public HumidityMapper humidityMapper;

    @Autowired
    public DustMapper dustMapper;

    @Override
    public String getTemperature(String data) {
        String result = "20";
                if ("01".equals(data)) {
                    result =temperatureMapper.getTemperature();
                }else if("02".equals(data)) {
                    result = temperatureMapper.getTemperature2();
                }
                else if("03".equals(data)) {
                    result = temperatureMapper.getTemperature3();
                }
                else if("04".equals(data)) {
                    result = temperatureMapper.getTemperature4();
                }
                else if("05".equals(data)) {
                    result = temperatureMapper.getTemperature5();
                }
                else if("06".equals(data)) {
                    result = temperatureMapper.getTemperature6();
                }
                else if("07".equals(data)) {
                    result = temperatureMapper.getTemperature7();
                }else if("08".equals(data)) {
                    result = temperatureMapper.getTemperature8();
                }else if("09".equals(data)) {
                    result = temperatureMapper.getTemperature9();
                }else if("10".equals(data)) {
                    result = temperatureMapper.getTemperature10();
                }




        return result;
    }

    @Override
    public String getHumidity(String data) {
        String result = "20";
        if ("01".equals(data)) {
            result = humidityMapper.getHumidity();
        }else if("02".equals(data)) {
            result = humidityMapper.getHumidity2();
        }
        else if("03".equals(data)) {
            result = humidityMapper.getHumidity3();
        }
        else if("04".equals(data)) {
            result = humidityMapper.getHumidity4();
        }
        else if("05".equals(data)) {
            result = humidityMapper.getHumidity5();
        }
        else if("06".equals(data)) {
            result = humidityMapper.getHumidity6();
        }
        else if("07".equals(data)) {
            result = humidityMapper.getHumidity7();
        }else if("08".equals(data)) {
            result = humidityMapper.getHumidity8();
        }else if("09".equals(data)) {
            result = humidityMapper.getHumidity9();
        }else if("10".equals(data)) {
            result = humidityMapper.getHumidity10();
        }
        return result;
    }

    @Override
    public String getDust(String data) {
        String result = "80";
        if ("01".equals(data)) {
            result = dustMapper.getDust();
        }else if("02".equals(data)) {
            result = dustMapper.getDust2();
        }
        else if("03".equals(data)) {
            result = dustMapper.getDust3();
        }
        else if("04".equals(data)) {
            result = dustMapper.getDust4();
        }
        else if("05".equals(data)) {
            result = dustMapper.getDust5();
        }
        else if("06".equals(data)) {
            result = dustMapper.getDust6();
        }
        else if("07".equals(data)) {
            result = dustMapper.getDust7();
        }else if("08".equals(data)) {
            result = dustMapper.getDust8();
        }else if("09".equals(data)) {
            result = dustMapper.getDust9();
        }else if("10".equals(data)) {
            result = dustMapper.getDust10();
        }
        return result;
    }

    @Override
    public String getElevator(String data) {
        int i = 1;
        if("01".equals(data)) {
            if (elevatorL == 0){
                elevatorL_frag = true;

            }else if (elevatorL == 10){
                elevatorL_frag = false;
            }
            if (elevatorL_frag){
                elevatorL++;
            }else{
                elevatorL--;
            }
            i = elevatorL;
        }else if("02".equals(data)) {
            if (elevatorR == 0){
                elevatorR_frag = true;

            }else if (elevatorR == 10){
                elevatorR_frag = false;
            }
            if (elevatorR_frag){
                elevatorR++;
            }else{
                elevatorR--;
            }
            i = elevatorR;
        }
        return String.valueOf(i);
    }
}
