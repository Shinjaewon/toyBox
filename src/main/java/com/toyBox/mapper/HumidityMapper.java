package com.toyBox.mapper;

import org.apache.ibatis.annotations.Select;

/**
 * Created by 201210098 on 2015-04-10.
 */
public interface HumidityMapper {
    @Select("SELECT data FROM  humidity_1 order by rand() limit 1")
    String getHumidity();

    @Select("SELECT data FROM  humidity_2 order by rand() limit 1")
    String getHumidity2();

    @Select("SELECT data FROM  humidity_3 order by rand() limit 1")
    String getHumidity3();

    @Select("SELECT data FROM  humidity_4 order by rand() limit 1")
    String getHumidity4();

    @Select("SELECT data FROM  humidity_5 order by rand() limit 1")
    String getHumidity5();


    @Select("SELECT data FROM  humidity_6 order by rand() limit 1")
    String getHumidity6();

    @Select("SELECT data FROM  humidity_7 order by rand() limit 1")
    String getHumidity7();

    @Select("SELECT data FROM  humidity_8 order by rand() limit 1")
    String getHumidity8();

    @Select("SELECT data FROM  humidity_9 order by rand() limit 1")
    String getHumidity9();

    @Select("SELECT data FROM  humidity_10 order by rand() limit 1")
    String getHumidity10();


}
